
interface AstheroidsResponse {
    near_earth_objects: {
        [todayDate]: Array<Astheroid>
    }
}

interface Astheroid {
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: {
        kilometers: estimated_diameter;
        meters: estimated_diameter;
        miles: estimated_diameter;
        feet: estimated_diameter;
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: Array<close_approach_data>;
    is_sentry_object: boolean;
}

interface estimated_diameter {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

interface close_approach_data {
    close_approach_date: string; // "2024-07-03"
    close_approach_date_full: string; // "2024-Jul-03 19:02"
    epoch_date_close_approach: number;
    relative_velocity: {
        kilometers_per_second: string;
        kilometers_per_hour: string;
        miles_per_hour: string;
    };
    miss_distance: {
        astronomical: string;
        lunar: string;
        kilometers: string;
        miles: string;
    };
    orbiting_body: string;
}
