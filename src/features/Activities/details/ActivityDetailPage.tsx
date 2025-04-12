import {  Grid2, Typography } from "@mui/material"
import {  useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSideBar from "./ActivityDetailsSideBar";
import ActivityDetailsHeader from "./ActivityDetailsHeader";

export default function ActivityDetailPage() {

    // const navigate = useNavigate();
    const { id } = useParams();
    const { activity, isLoadingActivity } = useActivities(id)

    if (isLoadingActivity) return <Typography>Loading...</Typography>
    if (!activity) return <Typography>Activity not found</Typography>

    return (
        <Grid2 container spacing={3}>
              <Grid2 size={8}>
                <ActivityDetailsHeader activity={activity}/>
                <ActivityDetailsInfo activity={activity}/>
                <ActivityDetailsChat/>
              </Grid2>
              <Grid2 size={4}>
                <ActivityDetailsSideBar/>
              </Grid2>
        </Grid2>
    )
}
