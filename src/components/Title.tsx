type TitlePropsType = {
	title: string;
};
function Title(props: TitlePropsType) {
	console.log(props);

	return <h1>{props.title}</h1>;
}
export default Title;
