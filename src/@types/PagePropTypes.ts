export interface EventPageProps {
    params: {
        event: string;
    };
    searchParams: Record<string, string>;
}

export interface DepartmentPageProps {
    params: {
        department: string;
    };
    searchParams: Record<string, string>;
}

export interface ResourcePageProps {
    params: {
        resource: string;
    };
    searchParams: Record<string, string>;
}