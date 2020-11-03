import { makeStyles } from '@material-ui/core/styles';

const cardStyle = makeStyles(() => ({
  root: {
    width: 350,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  gridItem: {
    padding: 10,
  },
  avatar: {
    float: 'left',
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  cellTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cellContent: {
    width: '80%',
  },
  darkRow: {
    backgroundColor: '#F5F5F5',
    border: 0,
  },
  link: {
    textDecoration: 'inherit',
    color: '#24292E',
  },
  cellIcon: {
    fontSize: 24,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#24292E',
    marginLeft: -20,
  },
}));

export default cardStyle;
