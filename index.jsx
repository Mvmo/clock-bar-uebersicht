export const command = "date +%H:%M";
export const refreshFrequency = 1000; // widget will run command once a second

export const className = {
    top: 0,
    left: 0,
    backgroundColor: "#00000099",
    color: "white",
    fontFamily: "Monaco",
    fontSize: "20px",
    padding: "0.3rem",
    width: "100vw",
    display: "flex",
    justifyContent: "center"
};

export const render = ({ output }) => (
    <span>{output}</span>
)
