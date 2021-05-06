package com.goetzrobin.trainmebe.shared.modules.user.model.entity;

import com.goetzrobin.trainmebe.app.exercise.model.entity.Exercise;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "usr")
@NoArgsConstructor
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_sysid")
    private Long userSysId;

    @Column(name = "user_email", unique = true, updatable = false)
    private String email;

    @Column(name = "user_password")
    private String password;

    @Column(name = "active")
    private boolean active;

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

    @OneToMany(mappedBy = "createUser", fetch = FetchType.LAZY)
    private Collection<Exercise> createdExercises;

    @OneToMany(mappedBy = "updateUser", fetch = FetchType.LAZY)
    private Collection<Exercise> lastUpdatedExercises;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isEnabled() {
        return isActive();
    }

    @Override
    public boolean isAccountNonExpired() {
        return isEnabled();
    }

    @Override
    public boolean isAccountNonLocked() {
        return isEnabled();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isEnabled();
    }

    public static User from(Long userSysId) {
        User newUser = new User();
        newUser.setUserSysId(userSysId);
        return newUser;
    }
}
