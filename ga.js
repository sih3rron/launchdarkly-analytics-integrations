export const analyticsTemplate = async (gtag, details, flagname) => {
	let assignment = {
		flagname: flagname,
		treatment: details.variationIndex,
		isExperiment: details.reason.inExperiment == null || details.reason.inExperiment == undefined ?  false : details.reason.inExperiment,
		audience: details.reason.ruleId !== null || details.reason.ruleId !== undefined ? details.reason.ruleId: details.reason.kind,
		audienceIndex: details.reason.ruleIndex !== null || details.reason.ruleId !== undefined ? details.reason.ruleIndex: details.reason.kind,
		eventCreated: new Date(),
	};

	console.log(details);
	console.log(assignment);

	if (!!window.gtag)
		gtag("event", "feature_treatment", assignment);

}