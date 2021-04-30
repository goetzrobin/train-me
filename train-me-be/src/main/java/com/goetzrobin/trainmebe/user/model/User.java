package com.goetzrobin.trainmebe.user.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_sysid")
    private Long userSysId;

    @Column(name = "user_email", unique = true, updatable = false)
    private String email;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "create_ts")
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createTS;

    @Column(name = "update_ts")
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updateTS;
}
