"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function PrimaryLogo() {
  const logoRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    gsap.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.in",
    });
  }, []);
  return (
    <svg
      ref={logoRef}
      width="324"
      height="40"
      viewBox="0 0 324 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0, transform: "translateY(-20px)" }}
    >
      <path
        d="M313.69 32.1217C307.154 32.1217 303.734 29.5677 303.474 24.4163H308.799C308.929 25.8016 309.362 26.7972 310.141 27.36C310.92 27.966 312.132 28.2257 313.777 28.2257C316.721 28.2257 318.192 27.36 318.192 25.5418C318.192 24.7626 317.846 24.1133 317.24 23.6804C316.591 23.2475 315.465 22.9012 313.82 22.5982L311.266 22.1653C306.375 21.3861 303.951 19.1351 303.951 15.4123C303.951 13.3345 304.73 11.6895 306.375 10.4774C307.976 9.26535 310.271 8.65931 313.214 8.65931C319.578 8.65931 322.868 11.2133 323.084 16.2348H317.933C317.846 14.9361 317.457 13.9838 316.677 13.421C315.898 12.8583 314.729 12.5553 313.214 12.5553C310.617 12.5553 309.318 13.421 309.318 15.1526C309.318 15.9318 309.578 16.4945 310.184 16.9274C310.747 17.3603 311.699 17.6633 313.041 17.8798L315.855 18.3127C318.539 18.8321 320.53 19.6113 321.742 20.6502C322.954 21.7324 323.604 23.2043 323.604 25.1089C323.604 27.36 322.738 29.0915 321.006 30.3036C319.275 31.5156 316.807 32.1217 313.69 32.1217Z"
        fill="white"
      />
      <path
        d="M301.753 9.17787V13.3336H297.338V25.4111C297.338 26.147 297.511 26.6664 297.9 26.9262C298.29 27.2292 298.939 27.359 299.892 27.359H301.753V31.5147C300.541 31.6446 299.589 31.6879 298.896 31.6879C296.472 31.6879 294.697 31.255 293.572 30.346C292.446 29.4369 291.927 27.9651 291.927 25.9738V13.3336H288.464V9.17787H291.927V2.68459H297.338V9.17787H301.753Z"
        fill="white"
      />
      <path
        d="M278.601 8.65931C281.026 8.65931 282.93 9.39522 284.316 10.7804C285.701 12.1657 286.437 14.157 286.437 16.711V31.5157H280.982V17.62C280.982 14.8063 279.554 13.3778 276.783 13.3778C275.398 13.3778 274.186 13.8972 273.234 14.8929C272.281 15.8885 271.805 17.2737 271.805 19.0053V31.5157H266.351V9.17877H271.632V12.3821C273.32 9.91468 275.658 8.65931 278.601 8.65931Z"
        fill="white"
      />
      <path
        d="M262.828 20.7368V22.0355H246.118C246.291 23.9402 246.897 25.412 247.893 26.3643C248.889 27.3167 250.231 27.7928 251.919 27.7928C254.386 27.7928 256.075 26.7539 257.027 24.5895H262.265C261.659 26.8838 260.447 28.7019 258.629 30.0438C256.767 31.3858 254.516 32.0351 251.876 32.0351C248.542 32.0351 245.858 30.9962 243.824 28.8318C241.746 26.7106 240.75 23.8969 240.75 20.3472C240.75 16.8408 241.746 14.0271 243.781 11.8627C245.815 9.74152 248.499 8.65931 251.789 8.65931C255.165 8.65931 257.849 9.78481 259.841 11.9925C261.832 14.2435 262.828 17.1439 262.828 20.7368ZM251.746 12.9016C248.542 12.9016 246.681 14.6764 246.161 18.2261H257.373C257.113 16.5811 256.507 15.2825 255.555 14.3301C254.559 13.3778 253.304 12.9016 251.746 12.9016Z"
        fill="white"
      />
      <path
        d="M229.536 8.65931C231.96 8.65931 233.865 9.39522 235.25 10.8237C236.635 12.2955 237.328 14.2435 237.328 16.7543V31.5157H231.874V17.62C231.874 14.8063 230.575 13.3778 228.021 13.3778C226.636 13.3778 225.51 13.8972 224.644 14.8929C223.779 15.8885 223.389 17.317 223.389 19.2217V31.5157H217.978V17.62C217.978 14.8063 216.679 13.3778 214.082 13.3778C212.697 13.3778 211.614 13.8972 210.749 14.8929C209.883 15.8885 209.493 17.317 209.493 19.2217V31.5157H204.039V9.17877H209.32V12.3821C210.835 9.91468 212.956 8.65931 215.684 8.65931C219.06 8.65931 221.398 10.0445 222.61 12.815C224.255 10.0445 226.592 8.65931 229.536 8.65931Z"
        fill="white"
      />
      <path
        d="M190.632 8.65931C193.663 8.65931 196.13 9.74153 197.948 11.8194C199.723 13.9838 200.632 16.7976 200.632 20.3472C200.632 23.8969 199.723 26.7106 197.948 28.8318C196.13 30.9962 193.663 32.0351 190.632 32.0351C187.602 32.0351 185.265 30.9096 183.706 28.6153V40.0002H178.252V9.17877H183.49V12.3821C185.091 9.91468 187.472 8.65931 190.632 8.65931ZM185.135 25.6717C186.087 26.9271 187.516 27.5331 189.334 27.5331C191.109 27.5331 192.537 26.8838 193.576 25.5851C194.572 24.3298 195.091 22.5116 195.091 20.1741C195.091 17.9231 194.572 16.1915 193.576 14.9794C192.58 13.7674 191.152 13.1613 189.334 13.1613C187.516 13.1613 186.087 13.8106 185.091 15.0227C184.053 16.2781 183.576 18.0529 183.576 20.3472C183.576 22.6848 184.096 24.4596 185.135 25.6717Z"
        fill="white"
      />
      <path
        d="M171.712 28.8318C169.634 30.9962 166.863 32.0351 163.487 32.0351C160.067 32.0351 157.34 30.9962 155.262 28.8318C153.141 26.7539 152.102 23.8969 152.102 20.3472C152.102 16.7976 153.141 13.9838 155.262 11.8627C157.34 9.74152 160.067 8.65931 163.487 8.65931C166.863 8.65931 169.634 9.74153 171.712 11.8194C173.789 13.9405 174.828 16.7976 174.828 20.3472C174.828 23.8969 173.789 26.7106 171.712 28.8318ZM163.487 27.5331C165.305 27.5331 166.69 26.9271 167.729 25.6717C168.768 24.4163 169.287 22.6415 169.287 20.3472C169.287 18.0962 168.768 16.3214 167.729 15.066C166.69 13.8106 165.305 13.1613 163.487 13.1613C161.669 13.1613 160.24 13.8106 159.201 15.0227C158.162 16.2781 157.686 18.0529 157.686 20.3472C157.686 22.6848 158.162 24.4596 159.201 25.6717C160.24 26.9271 161.669 27.5331 163.487 27.5331Z"
        fill="white"
      />
      <path
        d="M148.703 31.5156H143.249V0.694197H148.703V31.5156Z"
        fill="white"
      />
      <path
        d="M139.726 20.7368V22.0355H123.016C123.19 23.9402 123.796 25.412 124.791 26.3643C125.787 27.3167 127.129 27.7928 128.817 27.7928C131.285 27.7928 132.973 26.7539 133.925 24.5895H139.163C138.557 26.8838 137.345 28.7019 135.527 30.0438C133.665 31.3858 131.414 32.0351 128.774 32.0351C125.441 32.0351 122.757 30.9962 120.722 28.8318C118.644 26.7106 117.649 23.8969 117.649 20.3472C117.649 16.8408 118.644 14.0271 120.679 11.8627C122.713 9.74152 125.397 8.65931 128.687 8.65931C132.064 8.65931 134.748 9.78481 136.739 11.9925C138.73 14.2435 139.726 17.1439 139.726 20.7368ZM128.644 12.9016C125.441 12.9016 123.579 14.6764 123.06 18.2261H134.271C134.012 16.5811 133.406 15.2825 132.453 14.3301C131.458 13.3778 130.202 12.9016 128.644 12.9016Z"
        fill="white"
      />
      <path
        d="M109.606 15.151L111.77 9.17717H117.441L109.13 31.514H102.853L94.5847 9.17717H100.429L102.593 15.1943C103.589 18.3543 104.757 22.1637 106.099 26.5792C107.138 23.0295 108.307 19.2201 109.606 15.151Z"
        fill="white"
      />
      <path
        d="M94.239 20.7368V22.0355H77.5297C77.7028 23.9402 78.3089 25.412 79.3045 26.3643C80.3001 27.3167 81.6421 27.7928 83.3303 27.7928C85.7978 27.7928 87.486 26.7539 88.4384 24.5895H93.6763C93.0703 26.8838 91.8582 28.7019 90.0401 30.0438C88.1786 31.3858 85.9276 32.0351 83.287 32.0351C79.9538 32.0351 77.2699 30.9962 75.2354 28.8318C73.1575 26.7106 72.1619 23.8969 72.1619 20.3472C72.1619 16.8408 73.1575 14.0271 75.1921 11.8627C77.2267 9.74152 79.9105 8.65931 83.2005 8.65931C86.577 8.65931 89.2609 9.78481 91.2521 11.9925C93.2434 14.2435 94.239 17.1439 94.239 20.7368ZM83.1572 12.9016C79.9538 12.9016 78.0924 14.6764 77.573 18.2261H88.7847C88.525 16.5811 87.9189 15.2825 86.9666 14.3301C85.9709 13.3778 84.7156 12.9016 83.1572 12.9016Z"
        fill="white"
      />
      <path
        d="M42.2636 0.694197H54.0381C58.973 0.694197 62.7824 2.07943 65.4663 4.80661C68.1502 7.57707 69.4921 11.3432 69.4921 16.1049C69.4921 20.8666 68.1502 24.6327 65.4663 27.3599C62.7824 30.1304 58.973 31.5156 54.0381 31.5156H42.2636V0.694197ZM48.1076 26.4942H53.9515C56.9817 26.4942 59.3193 25.6284 60.9643 23.8536C62.6092 22.0787 63.4317 19.4814 63.4317 16.1049C63.4317 12.7284 62.6092 10.1744 60.9643 8.39955C59.3193 6.62472 56.9817 5.71566 53.9515 5.71566H48.1076V26.4942Z"
        fill="white"
      />
      <path
        d="M16.0603 19.6099V14.8915H29.826V31.5142H25.5838L24.7613 27.4451C22.5103 30.6485 19.1771 32.2069 14.7184 32.2069C10.2596 32.2069 6.70998 30.7351 4.02609 27.7914C1.3422 24.8478 0.000259399 20.9518 0.000259399 16.1035C0.000259399 11.2552 1.3422 7.35925 4.11267 4.37234C6.83985 1.47201 10.5627 0.000200272 15.2378 0.000200272C19.0905 0.000200272 22.2938 0.995837 24.8912 2.94382C27.4019 4.93509 28.9603 7.57569 29.4797 10.9522H23.4626C23.0298 9.13408 22.0774 7.70556 20.6056 6.66663C19.1338 5.62771 17.359 5.10825 15.2811 5.10825C12.4241 5.10825 10.2163 6.10388 8.57139 8.05186C6.92642 10.0431 6.10394 12.727 6.10394 16.1035C6.10394 19.5233 6.92642 22.2072 8.61468 24.1552C10.2596 26.1465 12.5539 27.0988 15.4975 27.0988C17.7918 27.0988 19.7831 26.4062 21.4281 25.021C23.073 23.6357 23.9388 21.8609 24.112 19.6099H16.0603Z"
        fill="white"
      />
    </svg>
  );
}

export default PrimaryLogo;
