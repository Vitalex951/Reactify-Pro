import {classNames} from "shared/lib/classnames/classnames";
import {FC, useState} from "react"
import s from "./Sidebar.module.scss"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {
    className,
  } = props

  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher/>
        {/*<LangSwitcher/>*/}
      </div>
    </div>
  );
};