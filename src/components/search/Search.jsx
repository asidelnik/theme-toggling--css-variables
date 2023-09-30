import c from './search.module.scss';
// import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx';

export default function Search() {
  return (
    <>
      {/* <Box sx={{ '& > :not(style)': { m: 1 } }}> */}
      <div className={c.container}>
        <FormControl
          variant="standard"
          fullWidth={true}
        >
          <Input
            id="input-with-icon-adornment"
            placeholder="Search episodes"
            className={clsx(c.searchInput)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon className={clsx(c.searchIcon)} />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      {/* </Box> */}
    </>
  );
}
