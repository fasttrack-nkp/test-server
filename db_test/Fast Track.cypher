CREATE (:USER {id: "userId1", firstName: "firstName1", lastName: "lastName1"})-[:HAS_ROLE]->(n0:ROLE {id: "roleId1", name: "roleName1"})-[:DO_TASK]->(n3:TASK {id: "taskId1", name: "taskName1", status: "SUCCESS", nodeType: "START_NODE", timestamp: 0, displayOrder: 1})<-[:DO_TASK]-(n13:ROLE {id: "roleId3", name: "roleName3"})-[:DO_TASK]->(n4:TASK {id: "taskId2", name: "taskName2", status: "PENDING", nodeType: "INTERMEDIATE_NODE", timestamp: 0, displayOrder: 2}),
(n12:TASK {id: "taskId7", name: "taskName7", status: "PENDING", nodeType: "INTERMEDIATE_NODE", timestamp: 0, displayOrder: 3})<-[:DO_TASK]-(n13)-[:DO_TASK]->(n10:TASK {id: "taskId5", name: "taskName5", status: "SUCCESS", nodeType: "INTERMEDIATE_NODE", timestamp: 0, displayOrder: 2})<-[:DO_TASK]-(n0)-[:DO_TASK]->(n4)<-[:HAS_TASK]-(n2:TRACK {id: "trackId1", HN: "HN1"})-[:HAS_TASK]->(n3)-[:THEN]->(n4)-[:THEN]->(n7:TASK {id: "taskId3", name: "taskName3", status: "PENDING", nodeType: "END_NODE", timestamp: 0, displayOrder: 3})<-[:HAS_TASK]-(n2),
(:USER {id: "userId2", firstName: "firstName2", lastName: "lastName2"})-[:HAS_ROLE]->(n5:ROLE {id: "roleId2", name: "roleName2"})-[:DO_TASK]->(n7)<-[:DO_TASK]-(n13)-[:DO_TASK]->(n9:TASK {id: "taskId4", name: "taskName4", status: "SUCCESS", nodeType: "START_NODE", timestamp: 0, displayOrder: 1}),
(n10)<-[:HAS_TASK]-(n8:TRACK {id: "trackId2", HN: "HN2"})-[:HAS_TASK]->(n9)-[:THEN]->(n10)-[:THEN]->(n11:TASK {id: "taskId6", name: "taskName6", status: "PENDING", nodeType: "END_NODE", timestamp: 0, displayOrder: 4})<-[:HAS_TASK]-(n8)-[:HAS_TASK]->(n12),
(n5)-[:DO_TASK]->(n9)-[:THEN]->(n12)-[:THEN]->(n11)<-[:DO_TASK]-(n5),
(n0)-[:DO_TASK]->(n12),
(:USER {id: "userId3", firstName: "firstName3", lastName: "lastName3"})-[:HAS_ROLE]->(n13)-[:DO_TASK]->(n11)