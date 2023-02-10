import { useEffect, useState } from "react";
import { Button } from "ui";
import getRandomPosition from "ui/GetRandomPosition";

export default function Web() {
  const [quantButtons, setQuantButtons] = useState(0)
  const [buttons, setButtons] = useState<any>([])

  useEffect(() => {
    const { top, left } = getRandomPosition(window.innerWidth - 160, window.innerHeight - 64)

    setButtons([
      ...buttons,
      <Button
        color="#005F86"
        text="Troquecommerce"
        onClick={() => setQuantButtons(prevState => prevState + 1)}
        top={top}
        left={left}
        className={`absolute right-1`}
      />
    ])
  }, [quantButtons])

  return (
    <div className="flex w-full h-screen bg-blue-200 items-center justify-center">
      <Button color="#005F86" text="Troquecommerce" onClick={() => setQuantButtons(prevState => prevState + 1)} />
      {buttons.length > 0 && buttons.map((button: any) => button)}
    </div>
  );
}
