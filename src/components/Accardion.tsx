type AccardionProps = {
	titleValue: string;
	collapsed: boolean;
};
function Accordion(props: AccardionProps) {
	if (props.collapsed === true) {
		return (
			<div>
				<AccordionTitle title={props.titleValue} />
				<AccordionBody />
			</div>
		);
	} else {
		return (
			<div>
				<AccordionTitle title={props.titleValue} />
			</div>
		);
	}
}
type AccordionTitlePropsType = {
	title: string;
};
function AccordionTitle(props: AccordionTitlePropsType) {
	return <h3>--- {props.title} ---</h3>;
}
function AccordionBody() {
	console.log('accordion body');

	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	);
}
export default Accordion;
