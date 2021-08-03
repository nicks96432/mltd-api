import { Badge } from "../types";

export const Badges: Badge[] = [
    {
        href: "https://github.com/nicks96432/mltd-api/actions/workflows/Test.yml",
        src: "https://github.com/nicks96432/mltd-api/actions/workflows/Test.yml/badge.svg",
        alt: "test result",
        width: 101,
        height: 20
    },
    {
        href: "https://github.com/nicks96432/mltd-api/actions/workflows/CodeQLAnalysis.yml",
        src: "https://github.com/nicks96432/mltd-api/actions/workflows/CodeQLAnalysis.yml/badge.svg",
        alt: "CodeQL Analysis",
        width: 168,
        height: 20
    },
    {
        href: "https://snyk.io/test/github/nicks96432/mltd-api",
        src: "https://snyk.io/test/github/nicks96432/mltd-api/badge.svg",
        alt: "vulnerabilities",
        width: 110,
        height: 20
    },
    {
        href: "https://david-dm.org/nicks96432/mltd-api",
        src: "https://status.david-dm.org/gh/nicks96432/mltd-api.svg",
        alt: "dependencies",
        width: 156,
        height: 20
    },
    {
        href: "https://david-dm.org/nicks96432/mltd-api?type=dev",
        src: "https://status.david-dm.org/gh/nicks96432/mltd-api.svg?type=dev",
        alt: "devDependencies",
        width: 179,
        height: 20
    }
];
