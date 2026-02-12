export default function Separator({ variant }: { variant?: 'solid' | 'dotted' } = { variant: 'solid' }) {
    return (
        <div className="w-full flex justify-center align-middle pl-4 pr-4">
            <div className={`w-full border-b lg:border-gray-300 mt-2 mb-2 ${variant === 'dotted' ? 'border-dotted' : 'border-solid'}`}>

            </div>
        </div>
    );
}