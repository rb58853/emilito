function BlurGradient({hard = "3", type="discrete"}) {

    return (<svg height="0">
        <defs>
            <filter id="blur-gradient">
                <feGaussianBlur in="SourceGraphic" stdDeviation={hard} />
                <feComponentTransfer>
                    <feFuncA type={type} tableValues="0   0   1" />
                </feComponentTransfer>
            </filter>
        </defs>
    </svg>
    )
}
export default BlurGradient;
