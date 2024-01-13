import { OrganizationSwitcher, auth } from "@clerk/nextjs"

function OrganizationIdPage() {
    const { userId, orgId } = auth();
    return (
        <div>
            <OrganizationSwitcher hidePersonal/>
            OrganizationIdPage {orgId}</div>
    )
}

export default OrganizationIdPage