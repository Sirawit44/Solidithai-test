import { Button } from '../common';
import { useNavigate } from "react-router-dom";

export default function RegisterContainer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center" onClick={()=>navigate('/register')}>
        <Button bg='yellow'>Create account</Button>
      </div>
    </>
  )
}