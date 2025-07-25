
type AvatarProps = {
    name:string,
    h: number,
    w: number
}

export const Avatar = ({name, h,w}:AvatarProps)=>{
    return <div style={{height:`${h}px`, width:`${w}px`}} className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full`}>
    <span className="font-medium text-gray-500">{name[0].toUpperCase()}</span>
</div>
}