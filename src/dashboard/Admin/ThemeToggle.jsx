import { Sun, Moon, Lightbulb } from "lucide-react";

import { useEffect } from "react";
import { useToggle } from "../../hooks/use-toggle";

function ThemeToggle() {
  const [dark, toggleDark] = useToggle(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

return (
    <button onClick={toggleDark}>
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;