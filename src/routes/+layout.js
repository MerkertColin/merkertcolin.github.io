import { redirect } from "@sveltejs/kit";

export const prerender = true;

// export async function load({ url }) {
//     const pathname = url.pathname;
//     if (pathname === '/') {
//         return redirect(301, '/paintings');
//     }
// }