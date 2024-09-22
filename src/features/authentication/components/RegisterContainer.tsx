import { useState } from "react";
import Button from "../../../components/button";
import Modal from "../../../components/Modal";
import RegisterForm from "../components/RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false)


  return (
    <>
      <div className="flex justify-center">
        <Button onClick={() => setOpen(true)} bg='yellow' width="full">Create account</Button>
      </div>
      <Modal title="Sign Up" open={open} onClose={() => setOpen(false)}>
        <RegisterForm/>
      </Modal>
    </>
  )
}