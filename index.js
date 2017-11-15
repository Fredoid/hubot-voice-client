var stt = require("text-to-speech");

const onAnythingSaid = test => console.log(`Partial message: ${text}`);
const onFinalised = text => console.log(`Final message: ${text}`);

try {
	const listener = new stt(onAnythingSaid, onFinalised);
	listerner.startListening();
} catch (error){
	console.log(`Error: ${error}`);
}
