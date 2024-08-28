export interface EventPageProps {
    params: {
        EventName: string;
    };
    searchParams: Record<string, string>;
}

export interface DepartmentPageProps {
    params: {
        departmentName: string;
    };
    searchParams: Record<string, string>;
}

export interface ResourcePageProps {
    params: {
        resourceName: string;
    };
    searchParams: Record<string, string>;
}