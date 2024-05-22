import React, { useState, useEffect } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { COLORS } from "../../utils/constants/colors";

export default function CircularProgressBar({ date, user, tasks }) {
  const [percentage, setPercentage] = useState(0);
  const scheme = useColorScheme();

  useEffect(() => {
    calculateDailyStatistics();
  }, [date, tasks]);

  const calculateDailyStatistics = () => {
    const completedTasks = tasks.filter(task => task.is_completed == true);
    // Calculate percentage
    const percentage = (completedTasks.length / tasks.length) * 100 || 0;
    setPercentage(percentage);
  };

  return (
    <View style={styles.container}>
      <CircularProgress
        value={percentage}
        inActiveStrokeColor={COLORS[scheme].text}
        inActiveStrokeOpacity={0.2}
        progressValueColor={COLORS[scheme].text}
        valueSuffix={"%"}
        radius={80}
        activeStrokeWidth={30}
        inActiveStrokeWidth={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
});
