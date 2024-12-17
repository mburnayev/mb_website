"use client";
const needBorder = (color: string) => {
    if (color.startsWith('#')) {
        return color.toUpperCase() === '#FFFFFF';
    }
    const rgb = color.match(/\d+/g);
    if (rgb) {
        return rgb[0] === '255' && rgb[1] === '255' && rgb[2] === '255';
    }
    return false;
};

export const LogoButton = ({
    items,
}: {
    items: {
        name: string;
        bgcolor: string;
        txcolor: string
        icon: string;
    }[];
}) => {
    return (
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-4">
            {items.map((item, idx) => (
                <button
                    key={item.name}
                    className={`rounded-full px-2 sm:px-3 py-1 sm:py-2 flex items-center space-x-1 text-xs sm:text-sm min-w-fit`}
                    style={{
                        backgroundColor: item.bgcolor,
                        border: needBorder(item.bgcolor) ? '2px solid black' : 'none',
                        color: item.txcolor
                    }}
                >
                    <img 
                        src={item.icon} 
                        alt="" 
                        className="w-3 h-3 sm:w-5 sm:h-5 object-contain"
                        style={{
                            imageRendering: 'auto',
                            aspectRatio: '1/1'
                        }}
                    />
                    <span className="truncate max-w-[80px] sm:max-w-none"> {item.name} </span>
                </button>
            ))}
        </div>
    );
};