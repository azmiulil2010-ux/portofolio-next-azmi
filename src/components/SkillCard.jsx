import { Badge } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function SkillCard({ nama, level }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg text-primary">{nama}</CardTitle> 
                <Badge variant="outline">Level :</Badge>
            </CardHeader>
        </Card>
    );
}