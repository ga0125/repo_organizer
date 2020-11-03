// -----------------------------
// File: src/Components/Home/render/Main.component.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 29 oct 2020
// Brief: Main component
// -----------------------------

// -----------------------------
// Import libraries
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { Typography, useTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Backdrop from '@material-ui/core/Backdrop';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Logo from '../../../assets/images/logo_repo_organizer.png';
import { HomeActionRequest, FilterHomeActionRequest, UserHomeActionRequest } from '../logic/Main.actions';
import CardsComponent from '../../Cards/render/Cards.components';

import homeStyles from './Main.styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home() {
  // -----------------------------
  // Initialize instances
  const classes = homeStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const dataStore = useSelector((state) => state.listRepoReducers);

  // -----------------------------
  // Initialize internal states (React Hooks)
  const options = ['', 'Unknown languages', 'APL', 'AutoIt', 'BASIC', 'Eiffel', 'Forth', 'Ada', 'ALGOL 68', 'APL', 'AWK',
    'BASIC', 'C', 'Ch', 'CPP', 'CSHARP', 'CFML', 'COBOL', 'Cobra', 'Common Lisp', 'D', 'F#', 'FreeBASIC', 'Fortran',
    'FoxPro', 'Go', 'Hack', 'Haskell', 'IDL', 'ISLISP', 'J', 'Java', 'JavaScript', 'Julia', 'Lingo', 'Lua', 'MATLAB',
    'Nim', 'Oberon', 'Oberon-2', 'Objective-C', 'Ocaml', 'Pascal', 'Kotlin', 'Object Pascal', 'Perl', 'Raku', 'PHP', 'PL/I',
    'Python', 'RPG', 'R', 'Ring', 'Ruby', 'Rust', 'Sass', 'S-Lang', 'Scala', 'Scheme', 'Smalltalk', 'Swift',
    'Visual Basic', 'Visual', 'Basic .NET', 'Wolfram Language', 'Windows PowerShell', 'Xojo', 'XPath/XQuery', 'Mathematica'];
  const [openSideBar, setOpenSidebar] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [inputSearch, setInputSearch] = React.useState('');
  const [search, setSearch] = React.useState(options[0]);
  const [repoSearch, setRepoSearch] = React.useState('');
  const [feedback, setFeedback] = React.useState(false);

  // -----------------------------
  // Dispatch action when the application is loading
  useEffect(() => {
    dispatch(HomeActionRequest());
  }, []);

  // -----------------------------
  // Set up feedback actions
  useEffect(() => {
    if (dataStore.isError) {
      setFeedback(true);
      setIsLoading(false);
    }
  }, [dataStore.isError]);

  // -----------------------------
  // Set up isLoading internal state according to the isLoading global state
  useEffect(() => {
    if (dataStore.data) { setIsLoading(false); }
  }, [dataStore.data]);

  // -----------------------------
  // Filter controller
  useEffect(() => {
    if (search) {
      setIsLoading(true);
      setPage(1);
      dispatch(FilterHomeActionRequest(search));
    }
  }, [search]);

  // -----------------------------
  // Controller pagination
  const changePage = (event, value) => {
    setPage(value);
    setRepoSearch('');
    setIsLoading(true);
    dispatch(HomeActionRequest(value, search));
  };

  // -----------------------------
  // Controller pagination
  const handleRepoSearch = () => {
    setIsLoading(true);
    setPage(1);
    dispatch(UserHomeActionRequest(repoSearch));
  };

  // -----------------------------
  // Feedback controller
  const handleFeedbackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setFeedback(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openSideBar,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open-menu"
            onClick={() => setOpenSidebar(true)}
            edge="start"
            className={clsx(classes.menuButton, openSideBar && classes.hide)}
            hidden={!openSideBar}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Procurar por usuários..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              error={dataStore.isError}
              value={repoSearch}
              onChange={(e) => setRepoSearch(e.target.value)}
              inputProps={{ 'aria-label': 'search-input' }}
            />
          </div>
          <IconButton className={classes.findButton} onClick={handleRepoSearch}>
            <ArrowForwardIcon className={classes.findIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openSideBar}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Grid className={classes.imgArea}>
            <img src={Logo} alt="" className={classes.logo} />
          </Grid>
          <IconButton onClick={() => setOpenSidebar(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem key="group-by">
            <ListItemIcon>
              <FilterListIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.menuDesc}>
                Filtrar por
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem button key="language">
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <Autocomplete
              id="fixed-tags-demo"
              value={search}
              onChange={(event, newValue) => {
                setSearch(newValue);
              }}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} label="Linguagem" variant="outlined" />}
              style={{ width: 250 }}
              options={options}
              inputValue={inputSearch}
              onInputChange={(event, newInputValue) => {
                setInputSearch(newInputValue);
              }}
            />
          </ListItem>
        </List>
      </Drawer>

      {/* Menu Content */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: openSideBar,
        })}
      >
        <CardsComponent />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.bottom}
        >
          <Pagination count={34} page={page} onChange={changePage} />
        </Grid>
      </main>

      {/* Backdrop feedback */}
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={feedback}
        autoHideDuration={9000}
        onClose={handleFeedbackClose}
      >
        <Alert onClose={handleFeedbackClose} severity="error">
          Algo deu errado! Tente novamente
        </Alert>
      </Snackbar>
    </div>
  );
}
