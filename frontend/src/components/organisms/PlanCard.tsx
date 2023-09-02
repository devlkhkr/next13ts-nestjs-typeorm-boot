import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Skeleton } from "@mui/material";
import { plan } from "@/types/plan";
import { useState } from "react";

export default function PlanCard({ plan }: { plan: plan }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      sx={{ width: 200, borderRadius: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={plan.url}
          alt={plan.planName}
        />
        {
          <CardContent
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              left: 0,
              backgroundColor: "rgba(0,0,0,.8)",
              bottom: 0,
              opacity: hovered ? "1" : "0",
              transitionDuration: ".3s",
              display: "flex",
              flexFlow: "column",
            }}
          >
            <Typography variant="body2">{plan.planName}</Typography>
            <Typography variant="body2" style={{ marginTop: "auto" }}>
              {plan.location}
            </Typography>
            <Typography variant="body2">{plan.planStartDt}</Typography>
          </CardContent>
        }
      </CardActionArea>
    </Card>
  );
}
