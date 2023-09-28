import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <FormControl variant="standard">
          <Input
            id="input-with-icon-adornment"
            placeholder="Search episodes"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </>
  );
}
