
import { Vortex } from  'react-loader-spinner'

function VortexSpinner() {
  return (
    <div className="App" style={{
        position: "absolute",
        top: 0,
        left: 0,
        justifyContent: 'center',
        height: "100%",
        width: "100%",
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: "9999"
      }}>
      <Vortex
        visible={true}
        height="30%"
        width="30%"
        ariaLabel="vortex-loading"
        wrapperStyle={{marginTop: '15%'}}
        wrapperClass="vortex-wrapper"
        colors={[ "#4169e1" ,"#0000ff ","#00008b" , "#87ceeb", "#6495ed", "#00bfff"  ]}
      />
    </div>
  );
}

export default VortexSpinner;
