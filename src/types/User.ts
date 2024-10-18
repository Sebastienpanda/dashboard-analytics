export type UserInfo = {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    score: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
};

export type UserActivity = {
    userId: number;
    sessions: [
        {
            day: string;
            kilogram: number;
            calories: 240;
        },
        {
            day: string;
            kilogram: number;
            calories: number;
        },
        {
            day: string;
            kilogram: number;
            calories: number;
        },
        {
            day: string;
            kilogram: number;
            calories: number;
        },
        {
            day: string;
            kilogram: number;
            calories: number;
        },
        {
            day: string;
            kilogram: number;
            calories: number;
        },
        {
            day: string;
            kilogram: number;
            calories: number;
        }
    ];
};

export type UserSession = {
    userId: number;
    sessions: [
        {
            day: number;
            sessionLength: number;
        },
        {
            day: number;
            sessionLength: number;
        },
        {
            day: number;
            sessionLength: number;
        },
        {
            day: number;
            sessionLength: number;
        },
        {
            day: number;
            sessionLength: number;
        },
        {
            day: number;
            sessionLength: number;
        },
        {
            day: number;
            sessionLength: number;
        }
    ];
};

export type UserPerformance = {
    userId: number;
    kind: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    data: [
        {
            value: number;
            kind: number;
        },
        {
            value: number;
            kind: number;
        },
        {
            value: number;
            kind: number;
        },
        {
            value: number;
            kind: number;
        },
        {
            value: number;
            kind: number;
        },
        {
            value: number;
            kind: number;
        }
    ];
};
