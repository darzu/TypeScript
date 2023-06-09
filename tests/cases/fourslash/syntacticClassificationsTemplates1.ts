/// <reference path="fourslash.ts"/>

////var v = 10e0;
////var x = {
////    p1: `hello world`,
////    p2: `goodbye ${0} cruel ${0} world`,
////};

const c = classification("original");
verify.syntacticClassificationsAre(
    c.keyword("var"), c.identifier("v"), c.operator("="), c.numericLiteral("10e0"), c.punctuation(";"),
    c.keyword("var"), c.identifier("x"), c.operator("="), c.punctuation("{"),
    c.identifier("p1"), c.punctuation(":"), c.stringLiteral("`hello world`"), c.punctuation(","),
    c.identifier("p2"), c.punctuation(":"), c.stringLiteral("`goodbye ${"), c.numericLiteral("0"), c.stringLiteral("} cruel ${"), c.numericLiteral("0"), c.stringLiteral("} world`"), c.punctuation(","),
    c.punctuation("}"), c.punctuation(";"));

const c2 = classification("2020");
verify.semanticClassificationsAre("2020",
    c2.semanticToken("variable.declaration", "v"), 
    c2.semanticToken("variable.declaration", "x"), 
    c2.semanticToken("property.declaration", "p1"), 
    c2.semanticToken("property.declaration", "p2"), 
);
