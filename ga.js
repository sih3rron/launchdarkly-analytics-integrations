function analyticsTemplate(ga, details, flagname) {
	let assignment = {
		flagname: flagname,
		treatment: details.variationIndex,
		audience: details.reason.ruleid,
		kind:details.reason.kind,
	};

if(!!window.ga) gtag("event", "feature_treatment", assignment);
}