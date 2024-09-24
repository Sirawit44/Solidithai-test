
type ButtonProps = {
children:string;
bg?: keyof typeof bgMap;
width?: keyof typeof widthMap;
onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



export const bgMap={
  blue: 'bg-blue-500 rounded hover:bg-blue-600',
  yellow: 'bg-yellow-500 rounded hover:bg-yellow-600',
  gray: 'bg-gray-500 rounded hover:bg-gray-600'
}

const widthMap={
  full:'w-full'
}


export default function Button({ children, bg='blue', onClick}: ButtonProps) {
  return (
    <button className={`px-3 py-1.5 mt-3 w-full ${bgMap[bg]}}`}
    onClick={onClick}>
      {children}
    </button>
  );
}