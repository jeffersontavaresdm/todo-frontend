import React from 'react';
import {useColorScheme} from '@mui/joy/styles';
import {ListItem, Switch, Typography} from "@mui/joy";

const ModeToggle = () => {
  const {mode, setMode} = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  React.useEffect(() => setChecked(mode !== 'light'), [mode]);

  if (!mounted) {
    return null;
  }

  return (
    <div align={"left"} style={{marginLeft: "1em", marginTop: "1em"}}>
      <ListItem
        style={{marginLeft: "0.5em"}}
        variant={"plain"}
        sx={{
          maxWidth: 165,
          display: 'flex',
          mx: 'auto',
          py: 0.5,
          px: 1.5,
          flexDirection: 'row',
          gap: 0.5,
          borderRadius: 'lg',
          boxShadow: 'md',
        }}
      >
        <Typography>Dark Mode</Typography>
        <Switch
          variant="solid"
          style={{marginLeft: "0.5em"}}
          checked={checked}
          color={mode === 'light' ? "neutral" : "primary"}
          onClick={() => mode === 'light' ? setMode('dark') : setMode('light')}
        >
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Switch>
      </ListItem>
    </div>
  );
};

export default ModeToggle;