import { useState } from "react";
import {
  createStyles,
  Navbar,
  Group,
  Code,
  getStylesRef,
  rem,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconGitPullRequest,
  
} from "@tabler/icons-react";
import { DiscountCheck, News } from 'tabler-icons-react';
import { MantineLogo } from "@mantine/ds";
import { Navigate } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const data = [
  {
    link: "/admin/requstedMembers",
    label: "Requsted Members",
    icon: IconGitPullRequest,
  },
  {
    link: "/admin/manageMember",
    label: "Manage Members",
    icon: IconDatabaseImport,
  },
  {
    link: "/admin/advertisement",
    label: "Adevertisement",
    icon: IconReceipt2
  },
  {
    link: "/admin/PromotionCodeManage",
    label: "Add Promation Code",
    icon: DiscountCheck,
  },
  {
    link: "/admin/AddNews",
    label: "Add News",
    icon: News,
  },
];

const NavbarSimple = ({ link_id }: any) => {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(data[link_id].link);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.link === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
        window.location.href = item.link;
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          {/* <MantineLogo size={28} />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>

        <a
          href="/admin/logout"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span onClick={() => window.location.href = '/admin/logout'}>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarSimple;
