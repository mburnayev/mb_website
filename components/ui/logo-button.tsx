import Image from "next/image";

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
        <div className="flex flex-wrap gap-2 mt-4">
            {items.map((item, idx) => (
                <button
                    key={item.name}
                    className={`rounded-full pl-3 pr-3 py-2 flex items-center space-x-1 text-s`}
                    style={{
                        backgroundColor: item.bgcolor,
                        border: needBorder(item.bgcolor) ? '2px solid black' : 'none',
                        color: item.txcolor
                    }}
                >
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <span> {item.name} </span>
                </button>
            ))}
        </div>
    );
};