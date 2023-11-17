import AnimatedCursor from "react-animated-cursor"

export default function AnimCursor(){
    return(
        <AnimatedCursor innerSize={10}
        outerSize={25}
        color="213, 207, 222"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2.5}
        showSystemCursor={false}
        trailingSpeed={12}
        

        />
        
    )
}