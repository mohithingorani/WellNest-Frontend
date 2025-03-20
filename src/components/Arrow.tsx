export const Arrow = ({fill}:{
    fill?:string
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      style={{
        marginTop: 10,
      }}
    >
      <path
        d="M26.4466 0C19.4326 0 12.7058 2.81448 7.74604 7.82429C2.78633 12.8341 0 19.6288 0 26.7138C0 33.7987 2.78633 40.5935 7.74604 45.6033C12.7058 50.6131 19.4326 53.4276 26.4466 53.4276C33.4607 53.4276 40.1875 50.6131 45.1472 45.6033C50.107 40.5935 52.8933 33.7987 52.8933 26.7138C52.8933 19.6288 50.107 12.8341 45.1472 7.82429C40.1875 2.81448 33.4607 0 26.4466 0ZM39.67 26.7672C39.6744 27.0546 39.6214 27.3399 39.5142 27.6062C39.407 27.8724 39.2477 28.114 39.0458 28.3166L30.3396 37.0841C30.142 37.284 29.9073 37.4427 29.649 37.5511C29.3906 37.6594 29.1137 37.7153 28.834 37.7156C28.5543 37.7158 28.2773 37.6604 28.0187 37.5525C27.7602 37.4446 27.5253 37.2864 27.3273 37.0867C27.1294 36.8871 26.9723 36.6501 26.865 36.3892C26.7577 36.1282 26.7024 35.8485 26.7021 35.5659C26.7019 35.2834 26.7567 35.0036 26.8636 34.7425C26.9704 34.4813 27.1271 34.244 27.3247 34.044L32.4236 28.8883H15.3391C14.7779 28.8883 14.2398 28.6631 13.843 28.2623C13.4462 27.8616 13.2233 27.318 13.2233 26.7512C13.2233 26.1844 13.4462 25.6408 13.843 25.24C14.2398 24.8392 14.7779 24.6141 15.3391 24.6141H32.4712L27.3247 19.4156C26.9249 19.0117 26.7003 18.464 26.7003 17.8929C26.7003 17.6101 26.7554 17.3301 26.8625 17.0688C26.9697 16.8076 27.1267 16.5702 27.3247 16.3702C27.5226 16.1702 27.7576 16.0116 28.0163 15.9034C28.275 15.7952 28.5522 15.7395 28.8321 15.7395C29.3975 15.7395 29.9398 15.9664 30.3396 16.3702L39.0458 25.1377C39.2445 25.3371 39.4019 25.5744 39.509 25.8358C39.6162 26.0972 39.6709 26.3775 39.67 26.6604V26.7672Z"
        fill={`${fill || "white"}`}
      ></path>
    </svg>
  );
};
