import * as React from "react"
import { motion } from "motion/react"
import { useTheme } from '@mui/material/styles';

const TurningGears = (props) => {
  const theme = useTheme()
  return(
  <svg
    viewBox="0 0 380 202"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  > 
    <g id="turningGears">
      
    <motion.g id="middleGear" animate={{ rotate: -props.rotation  }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <path
          id="outerGear_3"
          d="M231.597 6.3157C229.486 -2.11117 217.523 -2.11117 215.403 6.3157L214.786 8.80032C214.425 10.2442 213.685 11.5653 212.641 12.6264C211.597 13.6874 210.289 14.4499 208.851 14.8346C207.413 15.2193 205.899 15.2122 204.465 14.8142C203.03 14.4161 201.729 13.6415 200.695 12.5707L198.914 10.7376C192.876 4.49133 182.512 10.477 184.901 18.8257L185.596 21.2929C186.005 22.7224 186.024 24.2351 185.651 25.6743C185.278 27.1136 184.528 28.427 183.477 29.4787C182.426 30.5304 181.113 31.2821 179.674 31.6559C178.235 32.0298 176.723 32.0122 175.293 31.605L172.826 30.9013C164.486 28.5123 158.491 38.8764 164.738 44.9143L166.571 46.6952C167.641 47.729 168.416 49.0304 168.814 50.4645C169.212 51.8986 169.219 53.4132 168.835 54.8509C168.45 56.2887 167.687 57.5973 166.626 58.641C165.565 59.6847 164.244 60.4254 162.8 60.7863L160.316 61.4031C151.889 63.5142 151.889 75.4769 160.316 77.5966L162.8 78.2134C164.244 78.5743 165.565 79.3151 166.626 80.3588C167.687 81.4024 168.45 82.7111 168.835 84.1488C169.219 85.5866 169.212 87.1011 168.814 88.5352C168.416 89.9693 167.641 91.2708 166.571 92.3046L164.738 94.0855C158.491 100.123 164.477 110.487 172.826 108.098L175.293 107.403C176.723 106.994 178.237 106.975 179.677 107.348C181.118 107.721 182.432 108.473 183.484 109.525C184.536 110.577 185.287 111.891 185.66 113.331C186.033 114.771 186.014 116.285 185.605 117.715L184.901 120.174C182.512 128.514 192.876 134.508 198.914 128.262L200.695 126.429C201.729 125.358 203.03 124.584 204.465 124.186C205.899 123.788 207.413 123.78 208.851 124.165C210.289 124.55 211.597 125.312 212.641 126.373C213.685 127.434 214.425 128.756 214.786 130.199L215.403 132.684C217.514 141.111 229.477 141.111 231.597 132.684L232.213 130.199C232.574 128.756 233.315 127.434 234.359 126.373C235.402 125.312 236.711 124.55 238.149 124.165C239.587 123.78 241.101 123.788 242.535 124.186C243.969 124.584 245.271 125.358 246.305 126.429L248.085 128.262C254.123 134.508 264.487 128.523 262.098 120.174L261.403 117.707C260.994 116.276 260.975 114.763 261.348 113.322C261.721 111.882 262.473 110.568 263.525 109.516C264.577 108.464 265.891 107.712 267.331 107.339C268.771 106.967 270.285 106.986 271.715 107.395L274.174 108.098C282.514 110.487 288.508 100.123 282.262 94.0855L280.429 92.3046C279.358 91.2708 278.584 89.9693 278.186 88.5352C277.788 87.1011 277.78 85.5866 278.165 84.1488C278.55 82.7111 279.312 81.4024 280.373 80.3588C281.434 79.3151 282.756 78.5743 284.199 78.2134L286.684 77.5966C295.111 75.4856 295.111 63.5229 286.684 61.4031L284.199 60.7863C282.756 60.4254 281.434 59.6847 280.373 58.641C279.312 57.5973 278.55 56.2887 278.165 54.8509C277.78 53.4132 277.788 51.8986 278.186 50.4645C278.584 49.0304 279.358 47.729 280.429 46.6952L282.262 44.9143C288.508 38.8764 282.523 28.5123 274.174 30.9013L271.707 31.5963C270.277 32.0047 268.765 32.0236 267.325 31.6509C265.886 31.2783 264.573 30.5277 263.521 29.4769C262.469 28.4261 261.718 27.1133 261.344 25.6744C260.97 24.2355 260.988 22.7228 261.395 21.2929L262.098 18.8257C264.487 10.4857 254.123 4.49133 248.085 10.7376L246.305 12.5707C245.271 13.6415 243.969 14.4161 242.535 14.8142C241.101 15.2122 239.587 15.2193 238.149 14.8346C236.711 14.4499 235.402 13.6874 234.359 12.6264C233.315 11.5653 232.574 10.2442 232.213 8.80032L231.597 6.3157ZM223.5 112.911C217.747 112.993 212.035 111.93 206.696 109.785C201.357 107.639 196.498 104.454 192.401 100.415C188.304 96.375 185.05 91.5613 182.83 86.2534C180.609 80.9455 179.466 75.2492 179.466 69.4955C179.466 63.7418 180.609 58.0455 182.83 52.7376C185.05 47.4297 188.304 42.6161 192.401 38.5765C196.498 34.5369 201.357 31.3519 206.696 29.2066C212.035 27.0612 217.747 25.9984 223.5 26.0798C235.016 26.0798 246.06 30.6544 254.203 38.7972C262.345 46.9401 266.92 57.9841 266.92 69.4999C266.92 81.0156 262.345 92.0597 254.203 100.203C246.06 108.345 235.016 112.92 223.5 112.92V112.911Z"
          fill={theme.palette.primary.main}
        />
        <path
          id="innerGear_3"
          d="M230.199 17.2253C228.452 10.2535 218.555 10.2535 216.801 17.2253L216.291 19.281C215.992 20.4756 215.38 21.5685 214.516 22.4464C213.653 23.3243 212.57 23.9551 211.38 24.2733C210.191 24.5916 208.938 24.5858 207.751 24.2564C206.565 23.9271 205.488 23.2862 204.633 22.4003L203.159 20.8838C198.164 15.716 189.589 20.6681 191.566 27.5753L192.141 29.6166C192.479 30.7993 192.494 32.0507 192.186 33.2415C191.878 34.4322 191.257 35.5189 190.387 36.389C189.518 37.2591 188.432 37.881 187.241 38.1903C186.051 38.4996 184.8 38.485 183.617 38.1481L181.575 37.566C174.675 35.5894 169.716 44.1641 174.884 49.1594L176.4 50.6328C177.286 51.4881 177.927 52.5648 178.256 53.7513C178.586 54.9378 178.592 56.1909 178.273 57.3804C177.955 58.5699 177.324 59.6526 176.446 60.5161C175.568 61.3795 174.476 61.9924 173.281 62.291L171.225 62.8013C164.253 64.5478 164.253 74.445 171.225 76.1988L173.281 76.7091C174.476 77.0077 175.568 77.6205 176.446 78.484C177.324 79.3475 177.955 80.4301 178.273 81.6197C178.592 82.8092 178.586 84.0622 178.256 85.2487C177.927 86.4352 177.286 87.5119 176.4 88.3672L174.884 89.8406C169.716 94.836 174.668 103.411 181.575 101.434L183.617 100.859C184.8 100.521 186.052 100.505 187.244 100.813C188.436 101.122 189.523 101.744 190.393 102.614C191.264 103.484 191.885 104.572 192.194 105.763C192.502 106.955 192.487 108.207 192.148 109.391L191.566 111.425C189.589 118.325 198.164 123.284 203.159 118.116L204.633 116.6C205.488 115.714 206.565 115.073 207.751 114.744C208.938 114.414 210.191 114.408 211.38 114.727C212.57 115.045 213.653 115.676 214.516 116.554C215.38 117.432 215.992 118.524 216.291 119.719L216.801 121.775C218.548 128.747 228.445 128.747 230.199 121.775L230.709 119.719C231.008 118.524 231.62 117.432 232.484 116.554C233.347 115.676 234.43 115.045 235.62 114.727C236.809 114.408 238.062 114.414 239.249 114.744C240.435 115.073 241.512 115.714 242.367 116.6L243.841 118.116C248.836 123.284 257.411 118.332 255.434 111.425L254.859 109.383C254.521 108.2 254.505 106.948 254.813 105.756C255.122 104.564 255.744 103.477 256.614 102.607C257.484 101.736 258.572 101.115 259.763 100.806C260.955 100.498 262.207 100.513 263.391 100.852L265.425 101.434C272.325 103.411 277.284 94.836 272.116 89.8406L270.6 88.3672C269.714 87.5119 269.073 86.4352 268.744 85.2487C268.414 84.0622 268.408 82.8092 268.727 81.6197C269.045 80.4301 269.676 79.3475 270.554 78.484C271.431 77.6205 272.524 77.0077 273.719 76.7091L275.775 76.1988C282.747 74.4522 282.747 64.555 275.775 62.8013L273.719 62.291C272.524 61.9924 271.431 61.3795 270.554 60.5161C269.676 59.6526 269.045 58.5699 268.727 57.3804C268.408 56.1909 268.414 54.9378 268.744 53.7513C269.073 52.5648 269.714 51.4881 270.6 50.6328L272.116 49.1594C277.284 44.1641 272.332 35.5894 265.425 37.566L263.383 38.141C262.201 38.4788 260.949 38.4944 259.759 38.1861C258.568 37.8778 257.481 37.2569 256.611 36.3875C255.741 35.5181 255.119 34.432 254.81 33.2415C254.5 32.051 254.515 30.7995 254.852 29.6166L255.434 27.5753C257.411 20.6753 248.836 15.716 243.841 20.8838L242.367 22.4003C241.512 23.2862 240.435 23.9271 239.249 24.2564C238.062 24.5858 236.809 24.5916 235.62 24.2733C234.43 23.9551 233.347 23.3243 232.484 22.4464C231.62 21.5685 231.008 20.4756 230.709 19.281L230.199 17.2253ZM223.5 105.416C218.74 105.483 214.015 104.604 209.598 102.829C205.181 101.054 201.16 98.419 197.771 95.0769C194.381 91.7348 191.689 87.7523 189.852 83.3609C188.015 78.9695 187.069 74.2567 187.069 69.4964C187.069 64.7362 188.015 60.0234 189.852 55.632C191.689 51.2405 194.381 47.258 197.771 43.9159C201.16 40.5738 205.181 37.9387 209.598 36.1638C214.015 34.3889 218.74 33.5096 223.5 33.5769C233.027 33.5769 242.165 37.3616 248.901 44.0985C255.638 50.8354 259.423 59.9726 259.423 69.5C259.423 79.0274 255.638 88.1646 248.901 94.9015C242.165 101.638 233.027 105.423 223.5 105.423V105.416Z"
          fill={theme.palette.primary.nuetral}
        />
      </motion.g>
      
      
      <motion.g id="bigGear" animate={{ rotate: props.rotation }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <path
          id="outerGear"
          d="M75.1028 7.72969C77.6847 -2.57656 92.3153 -2.57656 94.9078 7.72969L95.6622 10.7684C96.1036 12.5344 97.0095 14.15 98.2859 15.4478C99.5624 16.7455 101.163 17.678 102.921 18.1485C104.68 18.619 106.532 18.6103 108.286 18.1235C110.04 17.6366 111.632 16.6892 112.896 15.3797L115.074 13.1378C122.458 5.49844 135.134 12.8191 132.212 23.0297L131.362 26.0472C130.862 27.7966 130.838 29.648 131.295 31.4094C131.751 33.1709 132.67 34.7783 133.956 36.0649C135.243 37.3515 136.85 38.2705 138.612 38.7267C140.373 39.1828 142.225 39.1595 143.974 38.6591L146.981 37.7984C157.181 34.8766 164.512 47.5522 156.873 54.9366L154.631 57.1147C153.321 58.379 152.374 59.9707 151.887 61.7247C151.4 63.4786 151.392 65.3309 151.862 67.0893C152.333 68.8477 153.265 70.4482 154.563 71.7247C155.861 73.0011 157.476 73.907 159.242 74.3484L162.281 75.1028C172.587 77.6847 172.587 92.3153 162.281 94.9078L159.242 95.6622C157.476 96.1036 155.861 97.0095 154.563 98.2859C153.265 99.5624 152.333 101.163 151.862 102.921C151.392 104.68 151.4 106.532 151.887 108.286C152.374 110.04 153.321 111.632 154.631 112.896L156.873 115.074C164.512 122.458 157.192 135.134 146.981 132.212L143.963 131.362C142.214 130.862 140.363 130.838 138.601 131.295C136.84 131.751 135.232 132.67 133.946 133.956C132.659 135.243 131.74 136.85 131.284 138.612C130.828 140.373 130.851 142.225 131.352 143.974L132.212 146.981C135.134 157.181 122.458 164.512 115.074 156.873L112.896 154.631C111.632 153.321 110.04 152.374 108.286 151.887C106.532 151.4 104.68 151.392 102.921 151.862C101.163 152.333 99.5624 153.265 98.2859 154.563C97.0095 155.861 96.1036 157.476 95.6622 159.242L94.9078 162.281C92.3259 172.587 77.6953 172.587 75.1028 162.281L74.3484 159.242C73.907 157.476 73.0011 155.861 71.7247 154.563C70.4482 153.265 68.8477 152.333 67.0893 151.862C65.3309 151.392 63.4786 151.4 61.7247 151.887C59.9707 152.374 58.379 153.321 57.1147 154.631L54.9366 156.873C47.5522 164.512 34.8766 157.192 37.7984 146.981L38.6484 143.963C39.1479 142.215 39.171 140.365 38.7152 138.605C38.2595 136.845 37.3415 135.238 36.0563 133.952C34.7712 132.666 33.1656 131.747 31.4058 131.289C29.646 130.832 27.7959 130.854 26.0472 131.352L23.0297 132.212C12.8297 135.134 5.49844 122.458 13.1378 115.074L15.3797 112.896C16.6892 111.632 17.6366 110.04 18.1235 108.286C18.6103 106.532 18.619 104.68 18.1485 102.921C17.678 101.163 16.7455 99.5624 15.4478 98.2859C14.15 97.0095 12.5344 96.1036 10.7684 95.6622L7.72969 94.9078C-2.57656 92.3259 -2.57656 77.6953 7.72969 75.1028L10.7684 74.3484C12.5344 73.907 14.15 73.0011 15.4478 71.7247C16.7455 70.4482 17.678 68.8477 18.1485 67.0893C18.619 65.3309 18.6103 63.4786 18.1235 61.7247C17.6366 59.9707 16.6892 58.379 15.3797 57.1147L13.1378 54.9366C5.49844 47.5522 12.8191 34.8766 23.0297 37.7984L26.0472 38.6484C27.7955 39.1479 29.6455 39.171 31.4057 38.7152C33.1659 38.2595 34.7723 37.3415 36.0585 36.0563C37.3448 34.7712 38.2641 33.1656 38.7213 31.4058C39.1785 29.646 39.157 27.7959 38.6591 26.0472L37.7984 23.0297C34.8766 12.8297 47.5522 5.49844 54.9366 13.1378L57.1147 15.3797C58.379 16.6892 59.9707 17.6366 61.7247 18.1235C63.4786 18.6103 65.3309 18.619 67.0893 18.1485C68.8477 17.678 70.4482 16.7455 71.7247 15.4478C73.0011 14.15 73.907 12.5344 74.3484 10.7684L75.1028 7.72969ZM137.843 90.3178H87.6616L57.5503 130.47C65.2202 135.102 73.9377 137.719 82.891 138.075C91.8443 138.432 100.742 136.518 108.756 132.51C116.771 128.502 123.64 122.532 128.726 115.155C133.812 107.778 136.948 99.2334 137.843 90.3178ZM137.843 79.6928C136.948 70.7772 133.812 62.2331 128.726 54.8558C123.64 47.4786 116.771 41.5083 108.756 37.5006C100.742 33.493 91.8443 31.5784 82.891 31.9352C73.9377 32.2919 65.2202 34.9084 57.5503 39.5409L87.6616 79.7034L137.843 79.6928ZM53.6403 42.1547C53.3216 42.3778 53.0241 42.6116 52.7159 42.8453L53.6403 42.1547ZM49.0609 45.9266C43.646 50.8934 39.3241 56.9328 36.3699 63.6607C33.4157 70.3885 31.894 77.6575 31.9016 85.0053C31.9016 100.465 38.5103 114.383 49.0609 124.084L78.3647 85.0053L49.0609 45.9266Z"
          fill={theme.palette.primary.main}
        />
        <path
          id="innerGear"
          d="M76.9668 22.2757C79.0627 13.9094 90.9393 13.9094 93.0438 22.2757L93.6562 24.7424C94.0145 26.176 94.7499 27.4875 95.7861 28.541C96.8223 29.5944 98.1215 30.3514 99.5489 30.7333C100.976 31.1152 102.48 31.1082 103.904 30.713C105.328 30.3178 106.62 29.5487 107.646 28.4857L109.414 26.6658C115.408 20.4644 125.698 26.4071 123.326 34.6957L122.636 37.1452C122.23 38.5653 122.211 40.0682 122.581 41.4981C122.952 42.928 123.698 44.2328 124.742 45.2772C125.787 46.3216 127.091 47.0677 128.521 47.438C129.951 47.8082 131.454 47.7893 132.874 47.3831L135.315 46.6844C143.595 44.3126 149.546 54.6022 143.345 60.5966L141.525 62.3647C140.462 63.391 139.693 64.6831 139.298 66.1069C138.902 67.5307 138.895 69.0343 139.277 70.4618C139.659 71.8892 140.416 73.1884 141.47 74.2246C142.523 75.2607 143.835 75.9961 145.268 76.3544L147.735 76.9668C156.101 79.0627 156.101 90.9393 147.735 93.0438L145.268 93.6562C143.835 94.0145 142.523 94.7499 141.47 95.7861C140.416 96.8222 139.659 98.1215 139.277 99.5489C138.895 100.976 138.902 102.48 139.298 103.904C139.693 105.328 140.462 106.62 141.525 107.646L143.345 109.414C149.546 115.408 143.604 125.698 135.315 123.326L132.865 122.636C131.445 122.23 129.942 122.211 128.513 122.581C127.083 122.952 125.778 123.698 124.733 124.742C123.689 125.786 122.943 127.091 122.573 128.521C122.202 129.951 122.221 131.454 122.628 132.874L123.326 135.315C125.698 143.595 115.408 149.546 109.414 143.345L107.646 141.525C106.62 140.462 105.328 139.693 103.904 139.298C102.48 138.902 100.976 138.895 99.5489 139.277C98.1215 139.659 96.8223 140.416 95.7861 141.47C94.7499 142.523 94.0145 143.835 93.6562 145.268L93.0438 147.735C90.948 156.101 79.0713 156.101 76.9668 147.735L76.3545 145.268C75.9962 143.835 75.2608 142.523 74.2246 141.47C73.1884 140.416 71.8892 139.659 70.4618 139.277C69.0344 138.895 67.5307 138.902 66.1069 139.298C64.6831 139.693 63.391 140.462 62.3647 141.525L60.5966 143.345C54.6022 149.546 44.3126 143.604 46.6845 135.315L47.3745 132.865C47.7799 131.446 47.7986 129.944 47.4287 128.516C47.0587 127.087 46.3135 125.783 45.2703 124.739C44.2271 123.694 42.9237 122.948 41.4951 122.577C40.0666 122.206 38.5648 122.223 37.1452 122.628L34.6957 123.326C26.4157 125.698 20.4645 115.408 26.6658 109.414L28.4857 107.646C29.5488 106.62 30.3178 105.328 30.713 103.904C31.1083 102.48 31.1153 100.976 30.7333 99.5489C30.3514 98.1215 29.5944 96.8222 28.541 95.7861C27.4875 94.7499 26.176 94.0145 24.7425 93.6562L22.2757 93.0438C13.9095 90.9479 13.9095 79.0713 22.2757 76.9668L24.7425 76.3544C26.176 75.9961 27.4875 75.2607 28.541 74.2246C29.5944 73.1884 30.3514 71.8892 30.7333 70.4618C31.1153 69.0343 31.1083 67.5307 30.713 66.1069C30.3178 64.6831 29.5488 63.391 28.4857 62.3647L26.6658 60.5966C20.4645 54.6022 26.4071 44.3126 34.6957 46.6844L37.1452 47.3744C38.5644 47.7799 40.0662 47.7986 41.4951 47.4286C42.924 47.0587 44.228 46.3135 45.2721 45.2703C46.3162 44.227 47.0625 42.9237 47.4336 41.4951C47.8048 40.0665 47.7873 38.5647 47.3831 37.1452L46.6845 34.6957C44.3126 26.4157 54.6022 20.4644 60.5966 26.6658L62.3647 28.4857C63.391 29.5487 64.6831 30.3178 66.1069 30.713C67.5307 31.1082 69.0344 31.1152 70.4618 30.7333C71.8892 30.3514 73.1884 29.5944 74.2246 28.541C75.2608 27.4875 75.9962 26.176 76.3545 24.7424L76.9668 22.2757ZM127.897 89.3178H87.1616L62.7183 121.912C68.9445 125.672 76.021 127.796 83.289 128.086C90.557 128.375 97.78 126.821 104.286 123.568C110.791 120.315 116.368 115.468 120.496 109.48C124.625 103.491 127.171 96.5552 127.897 89.3178ZM127.897 80.6928C127.171 73.4555 124.625 66.5196 120.496 60.531C116.368 54.5425 110.791 49.6959 104.286 46.4427C97.78 43.1894 90.557 41.6352 83.289 41.9248C76.021 42.2144 68.9445 44.3384 62.7183 48.0989L87.1616 80.7014L127.897 80.6928ZM59.5443 50.2207C59.2856 50.4018 59.0441 50.5916 58.794 50.7813L59.5443 50.2207ZM55.827 53.2826C51.4314 57.3145 47.9229 62.2171 45.5248 67.6785C43.1267 73.1399 41.8915 79.0406 41.8976 85.0053C41.8976 97.5547 47.2623 108.853 55.827 116.728L79.6147 85.0053L55.827 53.2826Z"
          fill={theme.palette.primary.nuetral}
        />
        <g id="Icons">
          <motion.path
            id="Personal Info"
            d="M34 16H55.1181L64.6207 25.5026V53.4253H34V16ZM37.4023 19.4023V50.023H61.2184V26.9112L53.7095 19.4023H37.4023ZM49.3103 29.6092C48.6336 29.6092 47.9845 29.878 47.506 30.3566C47.0275 30.8351 46.7586 31.4842 46.7586 32.1609C46.7586 32.8377 47.0275 33.4867 47.506 33.9653C47.9845 34.4438 48.6336 34.7126 49.3103 34.7126C49.9871 34.7126 50.6361 34.4438 51.1147 33.9653C51.5932 33.4867 51.8621 32.8377 51.8621 32.1609C51.8621 31.4842 51.5932 30.8351 51.1147 30.3566C50.6361 29.878 49.9871 29.6092 49.3103 29.6092ZM43.3563 32.1609C43.3563 31.379 43.5103 30.6048 43.8095 29.8824C44.1088 29.16 44.5473 28.5037 45.1002 27.9508C45.6531 27.3979 46.3095 26.9593 47.0318 26.6601C47.7542 26.3609 48.5285 26.2069 49.3103 26.2069C50.0922 26.2069 50.8665 26.3609 51.5889 26.6601C52.3112 26.9593 52.9676 27.3979 53.5205 27.9508C54.0734 28.5037 54.5119 29.16 54.8111 29.8824C55.1104 30.6048 55.2644 31.379 55.2644 32.1609C55.2644 33.74 54.6371 35.2545 53.5205 36.371C52.4039 37.4876 50.8895 38.1149 49.3103 38.1149C47.7312 38.1149 46.2168 37.4876 45.1002 36.371C43.9836 35.2545 43.3563 33.74 43.3563 32.1609ZM39.1034 46.6207C39.1034 44.816 39.8204 43.0852 41.0965 41.8091C42.3726 40.533 44.1034 39.8161 45.908 39.8161H52.7126C54.5173 39.8161 56.2481 40.533 57.5242 41.8091C58.8003 43.0852 59.5172 44.816 59.5172 46.6207V48.3218H56.1149V46.6207C56.1149 45.7183 55.7565 44.853 55.1184 44.2149C54.4804 43.5768 53.615 43.2184 52.7126 43.2184H45.908C45.0057 43.2184 44.1403 43.5768 43.5023 44.2149C42.8642 44.853 42.5057 45.7183 42.5057 46.6207V48.3218H39.1034V46.6207Z"
            fill="black"
            animate={{ rotate: -props.rotation  }} transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            id="Projects"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53 102L72 112.97V134.909L53 145.879L34 134.909V112.97L53 102ZM38.2222 117.601L38.2222 132.471L50.8888 139.784V124.914L38.2222 117.601ZM67.7777 117.601L55.1111 124.914V139.784L67.7778 132.471L67.7777 117.601ZM53 106.875L40.5444 114.067L53 121.258L65.4556 114.067L53 106.875Z"
            fill="black"
            animate={{ rotate: -props.rotation  }} transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            id="Contact"
            d="M123.441 79.0128C126.401 84.83 131.17 89.5783 136.987 92.5589L141.509 88.0367C142.064 87.4817 142.887 87.2967 143.606 87.5433C145.908 88.3039 148.396 88.715 150.944 88.715C152.075 88.715 153 89.64 153 90.7706V97.9444C153 99.075 152.075 100 150.944 100C131.643 100 116 84.3572 116 65.0556C116 63.925 116.925 63 118.056 63H125.25C126.381 63 127.306 63.925 127.306 65.0556C127.306 67.625 127.717 70.0917 128.477 72.3939C128.703 73.1133 128.539 73.915 127.963 74.4906L123.441 79.0128Z"
            fill="black"
            animate={{ rotate: -props.rotation  }} transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </g>
      </motion.g>
      <motion.g id="smallGear" animate={{ rotate: props.rotation }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <path
          id="outerGear_2"
          d="M307.452 85.4979C309.289 78.1623 319.703 78.1623 321.548 85.4979L322.085 87.6608C322.399 88.9178 323.044 90.0677 323.953 90.9914C324.861 91.9151 326 92.5788 327.252 92.9137C328.504 93.2485 329.822 93.2424 331.07 92.8959C332.319 92.5493 333.452 91.875 334.352 90.9429L335.902 89.3472C341.158 83.9098 350.18 89.1204 348.1 96.3879L347.495 98.5357C347.139 99.7808 347.122 101.099 347.447 102.352C347.772 103.606 348.426 104.75 349.342 105.666C350.257 106.582 351.401 107.236 352.655 107.56C353.909 107.885 355.227 107.869 356.472 107.512L358.612 106.9C365.872 104.82 371.09 113.842 365.653 119.098L364.057 120.648C363.125 121.548 362.451 122.681 362.104 123.93C361.758 125.178 361.751 126.496 362.086 127.748C362.421 129 363.085 130.139 364.009 131.047C364.932 131.956 366.082 132.601 367.339 132.915L369.502 133.452C376.838 135.289 376.838 145.703 369.502 147.548L367.339 148.085C366.082 148.399 364.932 149.044 364.009 149.953C363.085 150.861 362.421 152 362.086 153.252C361.751 154.504 361.758 155.822 362.104 157.07C362.451 158.319 363.125 159.452 364.057 160.352L365.653 161.902C371.09 167.158 365.88 176.18 358.612 174.1L356.464 173.495C355.219 173.139 353.901 173.122 352.648 173.447C351.394 173.772 350.25 174.426 349.334 175.342C348.418 176.257 347.764 177.401 347.439 178.655C347.115 179.909 347.131 181.227 347.488 182.472L348.1 184.612C350.18 191.872 341.158 197.09 335.902 191.653L334.352 190.057C333.452 189.125 332.319 188.451 331.07 188.104C329.822 187.758 328.504 187.751 327.252 188.086C326 188.421 324.861 189.085 323.953 190.009C323.044 190.932 322.399 192.082 322.085 193.339L321.548 195.502C319.711 202.838 309.297 202.838 307.452 195.502L306.915 193.339C306.601 192.082 305.956 190.932 305.047 190.009C304.139 189.085 303 188.421 301.748 188.086C300.496 187.751 299.178 187.758 297.93 188.104C296.681 188.451 295.548 189.125 294.648 190.057L293.098 191.653C287.842 197.09 278.82 191.88 280.9 184.612L281.505 182.464C281.86 181.22 281.877 179.903 281.552 178.65C281.228 177.397 280.575 176.254 279.66 175.339C278.745 174.423 277.602 173.769 276.35 173.443C275.097 173.118 273.78 173.133 272.536 173.488L270.388 174.1C263.128 176.18 257.91 167.158 263.347 161.902L264.943 160.352C265.875 159.452 266.549 158.319 266.896 157.07C267.242 155.822 267.249 154.504 266.914 153.252C266.579 152 265.915 150.861 264.991 149.953C264.068 149.044 262.918 148.399 261.661 148.085L259.498 147.548C252.162 145.711 252.162 135.297 259.498 133.452L261.661 132.915C262.918 132.601 264.068 131.956 264.991 131.047C265.915 130.139 266.579 129 266.914 127.748C267.249 126.496 267.242 125.178 266.896 123.93C266.549 122.681 265.875 121.548 264.943 120.648L263.347 119.098C257.91 113.842 263.12 104.82 270.388 106.9L272.536 107.505C273.78 107.86 275.097 107.877 276.35 107.552C277.603 107.228 278.746 106.575 279.661 105.66C280.577 104.745 281.231 103.602 281.557 102.35C281.882 101.097 281.867 99.7804 281.512 98.5357L280.9 96.3879C278.82 89.1279 287.842 83.9098 293.098 89.3472L294.648 90.9429C295.548 91.875 296.681 92.5493 297.93 92.8959C299.178 93.2424 300.496 93.2485 301.748 92.9137C303 92.5788 304.139 91.9151 305.047 90.9914C305.956 90.0677 306.601 88.9178 306.915 87.6608L307.452 85.4979ZM352.108 144.281H316.391L294.958 172.86C300.418 176.157 306.622 178.02 312.995 178.273C319.368 178.527 325.701 177.165 331.405 174.312C337.109 171.46 341.999 167.21 345.619 161.959C349.239 156.708 351.471 150.627 352.108 144.281ZM352.108 136.719C351.471 130.373 349.239 124.292 345.619 119.041C341.999 113.79 337.109 109.54 331.405 106.688C325.701 103.835 319.368 102.473 312.995 102.727C306.622 102.98 300.418 104.843 294.958 108.14L316.391 136.726L352.108 136.719ZM292.175 110C291.949 110.159 291.737 110.326 291.518 110.492L292.175 110ZM288.916 112.685C285.062 116.22 281.986 120.519 279.883 125.308C277.78 130.096 276.697 135.27 276.703 140.5C276.703 151.503 281.406 161.41 288.916 168.315L309.773 140.5L288.916 112.685Z"
          fill={theme.palette.primary.main}
        />
        <path
          id="innerGear_2"
          d="M308.733 95.4983C310.237 89.4964 318.757 89.4964 320.267 95.4983L320.706 97.2679C320.963 98.2964 321.491 99.2372 322.234 99.993C322.977 100.749 323.909 101.292 324.933 101.566C325.957 101.84 327.036 101.835 328.058 101.551C329.079 101.268 330.006 100.716 330.742 99.9533L332.011 98.6478C336.311 94.1989 343.693 98.4621 341.991 104.408L341.496 106.166C341.205 107.184 341.191 108.263 341.457 109.288C341.722 110.314 342.258 111.25 343.007 111.999C343.756 112.749 344.692 113.284 345.718 113.55C346.744 113.815 347.822 113.802 348.841 113.51L350.592 113.009C356.532 111.307 360.801 118.689 356.352 122.989L355.047 124.258C354.284 124.994 353.732 125.921 353.449 126.942C353.165 127.964 353.16 129.043 353.434 130.067C353.708 131.091 354.251 132.023 355.007 132.766C355.763 133.509 356.704 134.037 357.732 134.294L359.502 134.733C365.504 136.237 365.504 144.757 359.502 146.267L357.732 146.706C356.704 146.963 355.763 147.491 355.007 148.234C354.251 148.977 353.708 149.909 353.434 150.933C353.16 151.957 353.165 153.036 353.449 154.058C353.732 155.079 354.284 156.006 355.047 156.742L356.352 158.011C360.801 162.311 356.538 169.693 350.592 167.991L348.834 167.496C347.816 167.205 346.737 167.191 345.712 167.457C344.686 167.722 343.75 168.258 343.001 169.007C342.251 169.756 341.716 170.692 341.45 171.718C341.185 172.744 341.198 173.822 341.49 174.841L341.991 176.592C343.693 182.532 336.311 186.801 332.011 182.352L330.742 181.047C330.006 180.284 329.079 179.732 328.058 179.449C327.036 179.165 325.957 179.16 324.933 179.434C323.909 179.708 322.977 180.251 322.234 181.007C321.491 181.763 320.963 182.704 320.706 183.732L320.267 185.502C318.763 191.504 310.243 191.504 308.733 185.502L308.294 183.732C308.037 182.704 307.509 181.763 306.766 181.007C306.023 180.251 305.091 179.708 304.067 179.434C303.043 179.16 301.964 179.165 300.942 179.449C299.921 179.732 298.994 180.284 298.258 181.047L296.989 182.352C292.689 186.801 285.307 182.538 287.009 176.592L287.504 174.834C287.795 173.816 287.808 172.739 287.543 171.714C287.277 170.689 286.743 169.753 285.994 169.004C285.246 168.255 284.311 167.72 283.286 167.454C282.261 167.187 281.184 167.2 280.166 167.49L278.408 167.991C272.468 169.693 268.199 162.311 272.648 158.011L273.953 156.742C274.716 156.006 275.268 155.079 275.551 154.058C275.835 153.036 275.84 151.957 275.566 150.933C275.292 149.909 274.749 148.977 273.993 148.234C273.237 147.491 272.296 146.963 271.268 146.706L269.498 146.267C263.496 144.763 263.496 136.243 269.498 134.733L271.268 134.294C272.296 134.037 273.237 133.509 273.993 132.766C274.749 132.023 275.292 131.091 275.566 130.067C275.84 129.043 275.835 127.964 275.551 126.942C275.268 125.921 274.716 124.994 273.953 124.258L272.648 122.989C268.199 118.689 272.462 111.307 278.408 113.009L280.166 113.504C281.184 113.795 282.261 113.808 283.286 113.543C284.311 113.277 285.247 112.743 285.996 111.994C286.745 111.246 287.28 110.311 287.546 109.286C287.813 108.261 287.8 107.184 287.51 106.166L287.009 104.408C285.307 98.4683 292.689 94.1989 296.989 98.6478L298.258 99.9533C298.994 100.716 299.921 101.268 300.942 101.551C301.964 101.835 303.043 101.84 304.067 101.566C305.091 101.292 306.023 100.749 306.766 99.993C307.509 99.2372 308.037 98.2964 308.294 97.2679L308.733 95.4983ZM345.27 143.594H316.047L298.511 166.976C302.978 169.674 308.055 171.198 313.269 171.406C318.483 171.613 323.664 170.498 328.332 168.164C332.999 165.831 336.999 162.354 339.961 158.058C342.923 153.761 344.749 148.786 345.27 143.594ZM345.27 137.406C344.749 132.214 342.923 127.239 339.961 122.942C336.999 118.646 332.999 115.169 328.332 112.836C323.664 110.502 318.483 109.387 313.269 109.594C308.055 109.802 302.978 111.326 298.511 114.024L316.047 137.412L345.27 137.406ZM296.234 115.546C296.049 115.676 295.876 115.812 295.696 115.948L296.234 115.546ZM293.568 117.742C290.414 120.635 287.897 124.152 286.177 128.07C284.457 131.988 283.57 136.221 283.575 140.5C283.575 149.503 287.423 157.608 293.568 163.258L310.633 140.5L293.568 117.742Z"
          fill={theme.palette.primary.nuetral}
        />
      </motion.g>
    </g>
  </svg>
)}
export default TurningGears
