import React, { FC } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import "./Header.css";
import { appData } from "../../utils/constants";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          User Dashboard CRUD
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {appData.APP_NAV_LINKS.map((item) => (
            <Button key={item.id} sx={{ color: "#fff" }}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
