import Typography from "@mui/material/Typography";

function AboutMe() {
  return (
    <>
      <Typography variant="h1" component="h2" align="center" sx={{ my: 2.5 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ mx: 16 }}>
        Hi, I am Luka Korbelin, I was born 2011 in Los Angeles, California. I
        love math and science and I read from time to time. I love Star Wars and
        Marvel, although I’m not into the newer shows, besides the Mandalorian.
        I play Ice Hockey at the Jr. Kings and am having a lot of fun. My
        favorite book is Treasure Island, but now that I’m reading the Iliad and
        Odyssey, it has a contender.
      </Typography>
    </>
  );
}

export default AboutMe;
