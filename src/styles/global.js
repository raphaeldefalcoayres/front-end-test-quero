import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face{
  font-family:proxima-nova;src:url(https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/l?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/d?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/a?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;
}
@font-face{
  font-family:proxima-nova;src:url(https://use.typekit.net/af/d82519/00000000000000003b9b306a/27/l?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n8&v=3) format("woff2"),url(https://use.typekit.net/af/d82519/00000000000000003b9b306a/27/d?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n8&v=3) format("woff"),url(https://use.typekit.net/af/d82519/00000000000000003b9b306a/27/a?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n8&v=3) format("opentype");font-weight:800;font-style:normal;
}
@font-face{
  font-family:proxima-nova;src:url(https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/l?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n6&v=3) format("woff2"),url(https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/d?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n6&v=3) format("woff"),url(https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/a?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n6&v=3) format("opentype");font-weight:600;font-style:normal;
}
@font-face{
  font-family:proxima-nova;src:url(https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/d?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/a?primer=ae17073486537d08e9eda08205aebf213a997859aec1e2d494a29718fb4f41be&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;
}

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font:1rem proxima-nova,Arial,Helvetica,sans-serif;
  }

`;
