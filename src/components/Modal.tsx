
type ModalProps = {
  title?: string
  width?: number
  children?: React.ReactNode
  open?: boolean
  onClose?:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Modal({ width = 30,title, children, open, onClose }: ModalProps) {
  return (
    <>
      {open ?
        <>
          <div className="fixed inset-0 bg-white opacity-40 z-30"></div>
          <div className="fixed inset-0 z-40">
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white shadow-md rounded-md"
                style={{ width: `${width}rem` }}
              >
                <div className="flex justify-between p-4">
                  <h3 className="invisible" onClick={onClose}>&#10005;</h3>
                  <h5 className="text-2xl font-medium">{title}</h5>
                  <button onClick={onClose}>&#10005;</button>
                </div>
                <div>
                  <div className="grid grid-cols-2 p-4">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </> 
        : null}
    </>
  )
}