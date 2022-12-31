import { MenuOpen, Menu } from "@mui/icons-material";
import { Box, Fab, FabProps, SxProps, Theme, Tooltip, TooltipProps as TooltipPropsMui } from "@mui/material";
import { animated, config, easings, useSpring, useTransition } from "@react-spring/web";
import { Children, cloneElement, CSSProperties, useState } from "react";

type TooltipProps = Omit<TooltipPropsMui, 'children' | 'title' | 'placement'>;

const dynamicSx = (element: React.ReactElement, sx: SxProps<Theme>) => {
    return cloneElement(element, { sx });
}

// //************** RadialMenuChildrenAnimation **************/
// interface RadialMenuChildrenAnimationProp {
//     children: JSX.Element[];
//     open: boolean;
// }

// const RadialMenuChildrenAnimation = ({ children, open }: RadialMenuChildrenAnimationProp) => {
//     const mounted = useRef(false);

//     useEffect(
//         () => {
//             mounted.current = true;

//             return () => {
//                 mounted.current = false;
//             };
//         }, [])


//     const animationState = (arrLenght: number, index: number, show: boolean) => {
//         const zoomInZoomOutAnimation = (duration: number, delay: number): SxProps<Theme> => {
//             const tmpName: string = new Date().getTime().toString();
//             return {
//                 animationName: `zoom-in-zoom-out-${tmpName}`,
//                 transform: "scale(0, 0)",
//                 animationDuration: `${duration}ms`,
//                 animationFillMode: 'forwards',
//                 animationDelay: `${delay}ms`,
//                 [`@keyframes zoom-in-zoom-out-${tmpName}`]: {
//                     "0%": {
//                         transform: "scale(0, 0)",
//                     },
//                     // "50%": {
//                     //     transform: "scale(1.5, 1.5)",
//                     // },
//                     "100%": {
//                         transform: "scale(1, 1)",
//                     },
//                 }
//             }
//         }


//         const zoomOutZoomInAnimation = (duration: number, delay: number): SxProps<Theme> => {
//             const tmpName: string = new Date().getTime().toString();
//             return {
//                 animationName: `zoom-in-zoom-out-${tmpName}`,
//                 transform: "scale(1, 1)",
//                 animationDuration: `${duration}ms`,
//                 animationFillMode: 'forwards',
//                 animationDelay: `${delay}ms`,
//                 [`@keyframes zoom-in-zoom-out-${tmpName}`]: {
//                     "0%": {
//                         transform: "scale(1, 1)",
//                     },
//                     // "50%": {
//                     //     transform: "scale(1.5, 1.5)",
//                     // },
//                     "100%": {
//                         transform: "scale(0, 0)",
//                     },
//                 }
//             }
//         }

//         if (!mounted.current) {
//             return { transform: "scale(0, 0)" };
//         }
//         if (show && mounted.current) {
//             return zoomInZoomOutAnimation(index * 100, index * 32)
//         }
//         if (!show && mounted.current) {
//             return zoomOutZoomInAnimation(
//                 (arrLenght - index) * 100,
//                 (arrLenght - index) * 100);
//         }
//     }

//     return (
//         <>
//             {Children.map(children, (child, index) => {
//                 return cloneElement(child, {
//                     sx: animationState(children.length, index, open)
//                 });
//             })}
//         </>
//     )
// }


// const AnimatedRadialMenuItem = ({ children, open }: any) => {
//     return (
//         <>
//             {
//                 Children.map(children, (child, index) => {
//                     // const {opacity} = useSpring({
//                     //     // transform: open ? "scale(0, 0)" : "scale(1, 1)",
//                     //     // display: open ? "block" : "none",
//                     //     opacity: open ? 1 : 0,
//                     //     delay: index * 100,
//                     //     reset: true,
//                     //     reverse: !open,
//                     //   //   config: {
//                     //   //     duration: 50,
//                     //   //     easing: easings.easeInOutQuart,
//                     //   //   }
//                     //   });

//                     // const AnimatedComponent = animated(() =>
//                     //     cloneElement(child, {
//                     //         style: {
//                     //             opacity: opacity,
//                     //         }
//                     //      })
//                     // );


//                     const AnimatedBox = animated(Box);

//                     return (
//                         <AnimatedBox 
//                         key={index}
//                         style={{
//                             // transform: transform,
//                             // display: display,
//                             // opacity: opacity,

//                         }}> 
//                              {/* <AnimatedComponent key={index} /> */}
//                              {child}
//                          </AnimatedBox>
//                     )
//                 })
//             }
//         </>
//     )
// }
// //**************  **************/




export const RadialMenuItem = ({ icon, angle, distance, xOffset = 0, yOffset = 0, fabProps = { size: 'small' }, tooltipProps, tooltipTitle = '', tooltipPlacement, children, sx, style, onClick }: RadialMenuItemProp) => {
    return (
        <>
        </>
    )
};



const AnimatedRadialMenuIcon = ({ closeIcon, openIcon, open }: AnimatedRadialMenuIconProp) => {
    const { transform } = useSpring({
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        config: {
            duration: 100,
            // easing: easings.easeInOutQuart,
        }
    });

    const AnimatedBox = animated(Box);

    return (
        <>
            <AnimatedBox style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: transform,
            }}>{open ? openIcon : closeIcon}</AnimatedBox>
        </>)
}





export const RadialMenu = ({ children, onClick,
    sx,
    style,
    fabProps = { color: 'primary' },
    open = false,
    icon = <Menu />,
    openIcon = <MenuOpen />,
    xOffset = 8,
    yOffset = 8,
}: RadialMenuProp) => {
    const radialMenuItem = Array.isArray(children) ? children : [children];

    const itemLength = radialMenuItem?.length;
    const itemList = radialMenuItem.map((item: any, index: number) => {
        const { icon, angle, distance, xOffset = 0, yOffset = 0, fabProps = { size: 'small' }, tooltipProps, tooltipTitle = '', tooltipPlacement, children, sx, style, onClick }: RadialMenuItemProp = item.props;
        const x = distance * Math.cos((Math.PI / 180) * -angle) + xOffset;
        const y = distance * Math.sin((Math.PI / 180) * -angle) + yOffset;
        const tmp = (1 / itemLength) * index;

        return ({
            index,
            opacity: { output: [0, 1], range: [tmp, 1] },
            transform: {
                output: [0,
                    // 1.5,
                    1],
                range: [tmp,
                    // (tmp + 1) / 2, 
                    1]
            },
            x,
            y,
            icon,
            angle,
            distance,
            xOffset,
            yOffset,
            fabProps,
            tooltipProps,
            tooltipTitle,
            tooltipPlacement,
            children,
            sx,
            style,
            onClick,
        })
    });

    const [items, setItems] = useState < any > (open ? itemList : [])

    const transitions = useTransition(items, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        // config: {
        //   frequency: 0.4,
        // },
        // exitBeforeEnter: true,
    })

    const AnimatedBox = animated(Box);

    return (
        <Box
            sx={sx}
            style={{ ...style }}>

            <Fab {...fabProps}
                onClick={(e: any) => {
                    if (onClick !== undefined) {
                        onClick(e);
                        setItems((state: any) => !open ? itemList : []);
                    };
                }}>
                <AnimatedRadialMenuIcon
                    open={open}
                    openIcon={openIcon}
                    closeIcon={icon}
                />
            </Fab>

            {transitions(({ opacity }, item) => (
                <AnimatedBox
                    style={{
                        position: 'absolute',
                        top: item.y + yOffset,
                        left: item.x + xOffset,
                        opacity: opacity.to(item.opacity),
                        transform: opacity
                            .to(item.transform)
                            .to(s => `scale(${s})`),
                        ...item?.style,
                    }}
                    sx={item?.sx}
                    onClick={(e: any) => {
                        e.preventDefault();

                        if (item?.onClick !== undefined) {
                            item.onClick(e);
                        }
                    }}>
                    {
                        item?.children
                            ?
                            item.children
                            :
                            <Tooltip
                                title={item?.tooltipTitle}
                                placement={item?.tooltipPlacement}
                                {...item?.tooltipProps}>
                                <Fab {...item?.fabProps} >{item?.icon}</Fab>
                            </Tooltip>
                    }
                </AnimatedBox>
            ))}
        </Box>
    )
}
