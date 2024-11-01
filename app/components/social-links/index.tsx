import Link from "next/link"
import { GitHub, LinkedIn, Mail } from '@/app/components/icons';
import Tooltip from "@/app/components/tooltip";
import styles from './social-links.module.css';
import ThemeSwitcher from "../theme-switcher";

interface SocialButtonProps {
    href: string,
    icon: React.ReactNode,
    tooltip: string,
}

function SocialButton({ href, icon, tooltip }: SocialButtonProps ) {
    return (
        <Tooltip text={tooltip}>
          <Link href={href} className={styles.icon} target="_blank" data-element="original">{icon}</Link>  
        </Tooltip>
    );
}

export default function SocialLinks() {
    return (
      <div className={styles.socialLinks}>
        <SocialButton
          href="https://github.com/dineshh-m"
          icon={<GitHub />}
          tooltip="GitHub"
        />
        <SocialButton
          href="https://linkedin.com/in/dineshh-m"
          icon={<LinkedIn />}
          tooltip="LinkedIn"
        />
        <SocialButton
          href="mailto:dineshmoorthy101@gmail.com"
          icon={<Mail />}
          tooltip="Mail"
        />
        <ThemeSwitcher />
      </div>
    );
}