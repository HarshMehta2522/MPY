import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];

export const demoThumbnailUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/vr7/l5f/k5P/kZH/2tr/4OD/xMT/mZn/+fn/4+P/qKj/r6//yMj/zc3/09P/TU3/u7v/8fH/7Oz/pKT/n5//Vlb/R0f/tbX/nJz/aWn/Ojr/LCz/jIz/9vb/fX3/Ghr/dHT/EhL/h4f/YWH/Pz//IiL/Wlr/MDD/cHD/e3v/Jyf/goL3kCEBAAAEWklEQVR4nO2c2VbiUBBFIwYIkJBAEiCCTOLUrf//e01EaYZou1KnqOvqs598vHvJyq3plucRQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQkg3zbJeO0nifhA0iigK89HoptO53uI3582mv/2j07kZ5WEYFcNGEPTjpNXLsnRhffJq0nYSFKG/WU7Hg9nqSsxqNhhPl3M/LIKknRqKZXHkrwe3cqN/8TxY+1GcXdYunk/0zU6ZLYcX+hV3O5e3+2AyvIBgaOdXctdQ9ksfbAW3jLuagi1rvTfaeoKJtds7iZZg29psT09HsGvtdYCO4ZO11gH3GoKBtdURsYLhylrqiGe8YMPa6QT8P3FgrXTCFC2YWhudgTYcWgudgf6ZvloLnXENNpxZC50xBhta+1SAFexZ61SALWy4FdDs6EMNR9Y6FeRQw7W1TgVLqKFrEU0J9mN6Z61TwQpqaG1TCVLQvai0BFnyd6PGdkoLaNi3lqkEeSEWknOopSUR0DAXnKPheRuY1BHIK38uOEfZaMjGMK0DNkDD34Jz7Fop8QtMbM8aaDgVnOOjWYRvWiGLppKG6L4d1l3C3HY8AA0lGf5Bw6+HDW+RNdNHwTmOWpoBMsBFBqaSc5w0bW9QflfQwFRyjNO29OIXStBVw22Ui2qV4wRFncOq0QJQIIebPhElT9XDEz7CEFdtE9USPxkPSe/lhrhmt6iB/+kATCIeGcMNZegYel4kNMSlwKIU/8shJllehTMUzdF8PaYlyqtwczWxnqHn9euHhLgyhqhM8+9Ru9p5Fc5Q1Jf5xjBht2aGHfwYw+2NWysDxU1iiiZNvnmMOqUgnKH+/zCtVSf5Qb/SmlEqzlD5W1o708B9S1XvQ0G2iBupUYxpUknGj4tp9OJS2csGXFyqlVs0hJU317OntrhcgzPUyPEXgPEOXI6f4Q0hAzq4Nje81gYqfQNfz2ANYe0LnCDUENiCctMQ2UYEGsJ6T4KSxTkvQMNnwTkODMHt/BnQENIDhs+KD4CGkgq8Xh8f+eRCPoshL+GfswQaSkrTb/M0Ku/emkBD4UyUZODoC0KgoaSFojfXVgAN3ZxNRL4LcnO+FPmm280ZYegSCWuZSpCCTs7qP0INXXxv8QQ1dPHNzCvUEDmNhgJ54bv3krsE+3bNnZUYfwEvVrLWqQAr+B+8A3bvLbcPNnTvPT72Q+NiZAoWdC+qwUY0Ja7diLgphT0ra6cj7vCCjj3JV1m+59KeqImGoFO7vpS2froTnGrswXrDlZ17ihsw3ai5oaOZIxb2F/+L0krBPZJn3Qg6yn4lkcKT3u/iX2jRbi+fGpQXJ3O1T2gl3VYjf50+rPTNbi2WQR+p9lrxsBjNN+v78QTRB90t9N5cmy/0/oJFuZO99b6TvYjCPH/fye43D3eyj/IwiophEPQ/lrKrrggmhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhPwQ/gCnHFmFM03ovQAAAABJRU5ErkJggg==';
export const demoChannelUrl = '/channel/';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'GET A 5G NET TO LOAD CHANNEL';
export const demoVideoTitle = 'GET A 5G NET TO LOAD TITLE';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'