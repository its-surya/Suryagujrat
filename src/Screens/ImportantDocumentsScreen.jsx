import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HTML from 'react-native-htmlview';

const ImportantDocumentsScreen = () => {
  const source = `
    <p><strong>State</strong></p><p>Gujarat</p><p><strong>Net Metering</strong></p><p><!DOCTYPE html><html><head></head><body><p>Net metering is applicable for capacity from 1 kWp to 1000kWp</p></body></html></p><p><strong>Incentive</strong></p><p><!DOCTYPE html><html><head></head><body><p>For Solar Installation 1 to 1000kWp system</p><p><br /><strong>1. For Residential Customers, MNRE/Govt of Gujarat subsidy:</strong></p><p>i.&nbsp; 1 to 3 kWp : 40% of the Benchmark Cost<br />ii. 3 to 10 kWp: 20% of the Benchmark Cost</p><p>Above 10kWp, Subsidy: 40% upto 3kWp &amp; 20% for 3 to 10 kWp<br />(No subsidy for increamental capacity above 10kWp)</p><p>&nbsp;</p><p><strong>2. For Industrial &amp; Commercial:</strong><br />i. Accelerated Depreciation<br />ii. Provision of bank loans as a part of home loan/ home improvement loan</p></body></html></p>
    `;

  return (
    <View style={styles.container}>
      <ScrollView>
        <HTML value={source} />
      </ScrollView>
    </View>
  );
};

export default ImportantDocumentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
