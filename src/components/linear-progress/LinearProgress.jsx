import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Progress() {
  const progress = 50;

  return (
    <Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        color={'primary'}
      />
    </Box>
  );
}

/*
const [progress, setProgress] = useState(100);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
*/
